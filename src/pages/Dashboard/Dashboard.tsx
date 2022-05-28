import { Component } from "solid-js"
import Card from "../../Card/Card"

const Dashboard: Component = () => {
  return (
    <div class="flex justify-center items-center min-h-full">
      <Card heading="Devices" badge="1000"/>
    </div>
  )
}

export default Dashboard
