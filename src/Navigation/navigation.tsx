import { Link, useMatch } from "solid-app-router"
import { Component, ParentComponent } from "solid-js"

const NavLink: ParentComponent<any> = (props) => {
  const match = useMatch(() => props.href)
  return (
        <Link class={`no-underline text-current hover:(border-b-blue-400 border-b-4) ${props.class}`} classList={{ "border-b-blue-400 border-b-4": Boolean(match()) }}{...props}>
            {props.children}
        </Link>
  )
}

const Navigation: Component = () => {
  return (
        <nav class='py-4'>
            <ul class='items flex flex-row justify-evenly'>
                <li>
                    <NavLink href="/">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink href="/devices">Devices</NavLink>
                </li>
                <li>
                    <NavLink href="/rooms">Rooms</NavLink>
                </li>
            </ul>
        </nav >
  )
}

export default Navigation
