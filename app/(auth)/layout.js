import TopSection from "@/components/layout/TopSection";


export default function RootLayout({children}){
    return(
<div>
        <TopSection/>
        <div>{children}</div>
    </div>
    )
   
    

}