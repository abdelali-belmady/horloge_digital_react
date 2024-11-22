import React, { useState } from 'react'
import './style.css'
export default function Horloge() {
  const [houre, setHoure] = useState()
  const [minute, setMinute] = useState()
  const [seconds, setSeconds] = useState()
  const [year, setYear] = useState()
  const [month, setMonth] = useState()
  const [day, setDay] = useState()
  let currentimes = new Date()
  let arrayMonth = ["January", "February", "March", "April", "May", "June", "July", "juill", "August", "September", "October", "November", "December"]
  setInterval(() => {
    setHoure((currentimes.getHours() < 10 ? "0" : "") + (currentimes.getHours()))
    setMinute((currentimes.getMinutes() < 10 ? "0" : "") + (currentimes.getMinutes()))
    setSeconds((currentimes.getSeconds() < 10 ? "0" : "") + (currentimes.getSeconds()))
    setYear(currentimes.getFullYear())
    setMonth(currentimes.getMonth())
    setDay(currentimes.getDate())
  }, 1000)
  return (
    <div className="clock-container">
      <div className="ampm-indicator" id="ampm">AM</div>
      <div className="time-display">
        <span id="hours">{houre}</span>
        <span className="separator">:</span>
        <span id="minutes">{minute}</span>
        <span className="separator">:</span>
        <span id="seconds">{seconds}</span>
      </div>
      <div className="date-display" id="date">
        {day}{" "}{arrayMonth[month + 1]}{" "}{year}
      </div>
    </div>

  )
}
