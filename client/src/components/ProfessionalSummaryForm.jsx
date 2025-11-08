import { Loader2, Sparkles } from 'lucide-react'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast';
import api from '../configs/api';

const ProfessionalSummaryForm = ({ data, onChange, setResumeData }) => {

  const { token } = useSelector((state) => state.auth)
  const [isGenerating, setIsGenerating] = useState(false)

 const generateSummary = async () => {
  try {
    setIsGenerating(true);
    const prompt = `Enhance my professional summary for my resume: "${data}"`;

    const { data: response } = await api.post(
      '/api/ai/enhance-pro-sum',
      { userContent: prompt },
      { headers: { Authorization: token } }
    );

    setResumeData((prev) => ({
      ...prev,
      professional_summary: response.enhancedContent,
    }));
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
  } finally {
    setIsGenerating(false);
  }
};


  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'> Professional Summary</h3>
          <p className='text-sm text-gray-500'>Add summary for your resume here</p>
        </div>
        <button disabled={isGenerating} onClick={generateSummary} className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'>
          
          {isGenerating ? (<Loader2 className='size-4 animate-spin'/>) : (<Sparkles className='size-4' />)}
          {isGenerating ? 'Enhancing...' : 'AI Enhance'}
          
        </button>
      </div>
      <div className='mt-6'>
        <textarea value={data || ""} rows={7} onChange={(e) => onChange(e.target.value)} className='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none' placeholder='Write a compelling professional summary that highlights your key strength and career objectives...' />
        <p className='text-xs text-gray-500 max-w-4/5 mx-auto text-center'>Tip: Keep ot concise ( 3-4 sentences) and focus on your most relevent achievements and skills.</p>
      </div>
    </div>
  )
}

export default ProfessionalSummaryForm


// import { Loader2, Sparkles } from 'lucide-react';
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';

// const ProfessionalSummaryForm = ({ data, onChange, setResumeData }) => {
//   const { token } = useSelector((state) => state.auth);
//   const [isGenerating, setIsGenerating] = useState(false);

//   const generateSummary = async () => {
//     try {
//       setIsGenerating(true);
//       const prompt = `Enhance my professional summary for my resume: "${data}"`;
//       const response = await fetch('/api/ai/enhance-pro-sum', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: token,
//         },
//         body: JSON.stringify({ userContent: prompt }),
//       });

//       const result = await response.json();
//       if (result?.enhancedContent) {
//         setResumeData((prev) => ({ ...prev, professionalSummary: result.enhancedContent }));
//         toast.success('Summary enhanced!');
//       }
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setIsGenerating(false);
//     }
//   };
