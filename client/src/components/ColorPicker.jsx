import { Check, Palette } from 'lucide-react';
import React, { useState } from 'react'

const ColorPicker = ({ selectedColor, onChange }) => {
  const colors = [
{ name: "Navy Blue", value: "#1E40AF" },      // Deep, classic blue
    { name: "Slate Gray", value: "#475569" },     // Muted, modern gray
    { name: "Dark Teal", value: "#0F766E" },      // Rich, deep teal
 { "name": "Orange", "value": "#F97316" },

      // Professional crimson
    { name: "Forest Green", value: "#166534" },   // Elegant dark green
    { "name": "Rose", "value": "#F43F5E" },

        // Balanced dark purple-blue
    { name: "Charcoal", value: "#1F2937" },       // Near-black for maximum contrast
       // Vibrant but safe mid-blue
    { name: "Soft Brown", value: "#78350F" },     // Deep earthy brown
    { name: "Ocean Blue", value: "#0891B2" },     // Subdued cyan-blue
    { name: "Muted Plum", value: "#7E22CE" },     // Dark, sophisticated purple
    { name: "Olive Drab", value: "#525252" }  
  ]

  const [isopen, setIsOpen ] = useState(false);
  return (
    <div className='relative'>
      <button onClick={() => setIsOpen(!isopen)} className='flex items-center gap-1 text-sm text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg'>
        <Palette size={16}/> <span className='max-sm:hidden'>Accent</span>
      </button>
      {isopen && (
        <div className='grid grid-cols-4 w-60 gap-2 absolute top-full left-0 right-0 p-3 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-sm'>
          {colors.map((color) => (
            <div key={color.value} className='relative cursor-pointer group flex flex-col' onClick={()=> {onChange(color.value); setIsOpen(false)}}>
              <div className='w-12 h-12 rounded-full border-2 border-transparent group-hover:border-black/25 transition-colors' style={{backgroundColor : color.value}}>
              </div>
              {selectedColor === color.value && (
                <div className='absolute top-0 left-0 right-0 bottom-4 flex items-center justify-center'>
                  <Check className='size-5 text-white'/>
                </div>
              )}
              <p className='text-xs text-center mt-1 text-gray-600'>{color.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
 
export default ColorPicker
