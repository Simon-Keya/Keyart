import React from 'react';
import { Grid, Text, Button } from '@geist-ui/react';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
 const columns = [
   {
     title: 'Email',
     value: 'simonkeya78@gmail.com',
   },
   {
     title: 'Phone',
     value: '(0790) 448-452',
   },
   {
     title: 'Address',
     value: 'Narok & Nairobi, Kenya',
   },
   {
     title: 'Social Media',
     value: (
       <Grid.Container gap={1}>
         <Grid>
           <Button auto type="secondary" onClick={() => window.open("https://www.instagram.com/jane.doe", "_blank")} placeholder="" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
             Instagram
           </Button>
         </Grid>
         <Grid>
           <Button auto type="secondary" onClick={() => window.open("https://www.twitter.com/jane.doe", "_blank")} placeholder="" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
             Twitter
           </Button>
         </Grid>
       </Grid.Container>
     ),
   },
 ];

 return (
   <section id={id} className="bg-black py-12 px-4 sm:px-6 lg:px-8"> {/* Adjusted background color */}
     <div className="container mx-auto">
       <div className="mb-20 text-center">
         <h2 className="text-5xl font-extrabold tracking-tight text-white"> {/* Increased title size and adjusted text color */}
           Contact Me
         </h2>
         <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
           If you have any inquiries or concerns, feel free to get in touch with me.
         </p>
       </div>
       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
         {columns.map((column, index) => (
           <div key={index} className="p-6 bg-white rounded-lg shadow-md">
             <h3 className="text-xl font-semibold mb-2">{column.title}</h3>
             <Text className="text-gray-900">{column.value}</Text> {/* Adjusted text color */}
           </div>
         ))}
       </div>
     </div>
   </section>
 );
};

export default Contact;
