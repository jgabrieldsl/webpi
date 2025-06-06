import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { auth, logoutUser } from "@/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useAuthState } from "@/hooks/useAuth"
import { Loader } from "@/components"

export default function Home() {
  const { username, setUsername, isLoading, setIsLoading } = useAuthState()
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true) 
    const startTime = Date.now()

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const elapsedTime = Date.now() - startTime
      const minDelay = 2700

      const handleNavigation = () => {
        if (user) {
          setUsername(username || user.email || "Usuário")
          setIsLoading(false)
        } else {
          setIsLoading(false)
          navigate("/")
        }
      }

      if (elapsedTime < minDelay) {
        const remainingTime = minDelay - elapsedTime
        setTimeout(handleNavigation, remainingTime)
      } else {
        handleNavigation()
      }
    })

    return () => {
      unsubscribe()
    }
  }, [navigate, setUsername, setIsLoading])

  const handleLogout = async () => {
    try {
      await logoutUser()
      navigate("/")
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    }
  }

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-100">
      <header className="flex items-center justify-between w-full p-4 bg-white shadow-md">
        <div className="flex items-center">
          <img
            src="/ic_launcher-playstore 2.png"
            alt="SuperID Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="ml-2 text-xl font-semibold text-gray-800">SuperID</span>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </header>
      <div className="flex items-center justify-center flex-1">
        {isLoading || !username ? (
          <Loader />
        ) : (
          <h1 className="text-3xl font-bold">Bem-vindo à Home, {username}!</h1>
        )}
      </div>
    </div>
  )
}