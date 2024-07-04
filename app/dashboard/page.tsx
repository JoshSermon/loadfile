import Dropzone from '@/components/ui/Dropzone';
import { auth } from '@clerk/nextjs';
import React from 'react';


function Dashboard() {
  const {userId} = auth();
  return (
    <div>
      <Dropzone />
    </div>
  )
}

export default Dashboard

// Stopped at 27.35