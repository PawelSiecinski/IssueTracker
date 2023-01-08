import { Route, Routes } from "react-router-dom"
import { Home, Closed, Create} from "../pages"
import { Header } from "../features/Shared/components/Header"

const AppRoutes = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/closed" element={<Closed />} />
      <Route path="/create" element={<Create/>} />
    </Routes>
    </>
  )
}
export default AppRoutes;