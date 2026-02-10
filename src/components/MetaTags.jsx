import React, { useEffect } from 'react'

export default function MetaTags(){
  useEffect(()=>{
    document.title = 'Afri Kan-excel Foundation'
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta')
    meta.name = 'description'
    meta.content = 'Afri Kan-excel Foundation — empowering communities across Africa through education, entrepreneurship and sustainable development.'
    document.head.appendChild(meta)
  },[])
  return null
}
