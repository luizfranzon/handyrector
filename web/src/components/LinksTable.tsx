"use client"

import { Separator } from "@/components/ui/separator"
import { Checkbox } from "./ui/checkbox"
import axios from "axios"

import { useEffect, useState } from "react"

interface LinksData {
  id: string
  slug: string
  URL: string
  isActive: boolean
  accessQuantity: number
}

export async function LinksTable() {

  const data: LinksData[] = await getData()

  return (
    <div className="border rounded-lg m-auto w-full max-w-7xl mt-[10vh] flex items-center justify-between h-[70vh]">
      <div className="flex-1 h-full p-6">
        <table className="w-full">
          <thead className="bg-zinc-900">
            <tr className="font-bold">
              <td className="text-center p-4 rounded-l-xl">Slug</td>
              <td className="text-center p-4">URL</td>
              <td className="text-center p-4 ">Acessos</td>
              <td className="text-center p-4 rounded-r-xl">Ativo?</td>
            </tr>
          </thead>
          <tbody className="">
            {
              data.map(link => {
                return (
                  <tr className="hover:bg-zinc-900" key={link.id}>
                    <td className="text-left">{link.slug}</td>
                    <td className="text-left">{link.URL}</td>
                    <td className="text-center">{link.accessQuantity}</td>
                    <td className="flex justify-center items-center">
                      <Checkbox checked={link.isActive} />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <Separator orientation="vertical" />
      <div className="flex-1 h-full p-6">
        <form>aaaa</form>
      </div>
    </div>
  )
}

async function getData() {
  const response = await axios.get("http://localhost:3001/links")
  return response.data
}