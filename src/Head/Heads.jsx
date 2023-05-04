import React,{useState}  from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
const Header =styled('div')`
    background-color: #F3F3F3;
    flex-direction: column;
    width: 100%;
    height: 60px;
    display: flex;
    align-content: flex-end;
    position: sticky;
    top: 0;
    z-index: 2;
    .head-img{
  display: flex;
  gap: 6rem;
  justify-content: center;
  align-items: flex-end;
  margin-top: 10px;
}
&:hover{
  cursor: pointer;
}
`
function Head(){
    return(
        <Header>
            <div className="head-img">
                <Link to={'/korzina/'} className='pp'>
            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.78125 4.6875H21.0938C21.5254 4.6875 21.875 4.33789 21.875 3.90625V0.78125C21.875 0.349609 21.5254 0 21.0938 0H0.78125C0.349609 0 0 0.349609 0 0.78125V3.90625C0 4.33789 0.349609 4.6875 0.78125 4.6875ZM24.2188 8.59375H3.90625C3.47461 8.59375 3.125 8.94336 3.125 9.375V12.5C3.125 12.9316 3.47461 13.2812 3.90625 13.2812H24.2188C24.6504 13.2812 25 12.9316 25 12.5V9.375C25 8.94336 24.6504 8.59375 24.2188 8.59375ZM21.0938 17.1875H0.78125C0.349609 17.1875 0 17.5371 0 17.9688V21.0938C0 21.5254 0.349609 21.875 0.78125 21.875H21.0938C21.5254 21.875 21.875 21.5254 21.875 21.0938V17.9688C21.875 17.5371 21.5254 17.1875 21.0938 17.1875Z" fill="black"/>
</svg>
</Link>

<Link to={'/izb/'}>
<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5738 1.49576C19.8981 -0.784512 15.9186 -0.374356 13.4625 2.15982L12.5006 3.15104L11.5387 2.15982C9.08751 -0.374356 5.10314 -0.784512 2.42736 1.49576C-0.639049 4.11295 -0.800182 8.81021 1.94396 11.6471L11.3922 21.403C12.0026 22.0329 12.9938 22.0329 13.6041 21.403L23.0524 11.6471C25.8014 8.81021 25.6402 4.11295 22.5738 1.49576Z" fill="black"/>
</svg>
</Link>

<Link to={'/'}>
<svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1695 5.04384L4.16732 11.6345V18.7478C4.16732 18.932 4.24048 19.1086 4.37072 19.2389C4.50095 19.3691 4.67758 19.4423 4.86176 19.4423L9.72548 19.4297C9.90905 19.4288 10.0848 19.3552 10.2143 19.2251C10.3438 19.0949 10.4165 18.9188 10.4164 18.7352V14.5812C10.4164 14.397 10.4896 14.2204 10.6198 14.0901C10.7501 13.9599 10.9267 13.8867 11.1109 13.8867H13.8887C14.0729 13.8867 14.2495 13.9599 14.3797 14.0901C14.51 14.2204 14.5831 14.397 14.5831 14.5812V18.7322C14.5828 18.8236 14.6006 18.9141 14.6354 18.9986C14.6701 19.0831 14.7212 19.1599 14.7857 19.2247C14.8503 19.2894 14.9269 19.3407 15.0113 19.3758C15.0957 19.4108 15.1862 19.4288 15.2776 19.4288L20.1395 19.4423C20.3237 19.4423 20.5004 19.3691 20.6306 19.2389C20.7608 19.1086 20.834 18.932 20.834 18.7478V11.6298L12.8336 5.04384C12.7395 4.96802 12.6223 4.92668 12.5015 4.92668C12.3807 4.92668 12.2635 4.96802 12.1695 5.04384ZM24.8097 9.52344L21.1812 6.53255V0.520833C21.1812 0.3827 21.1263 0.250224 21.0287 0.152549C20.931 0.0548735 20.7985 0 20.6604 0H18.2298C18.0917 0 17.9592 0.0548735 17.8615 0.152549C17.7639 0.250224 17.709 0.3827 17.709 0.520833V3.67231L13.8231 0.47526C13.4502 0.168394 12.9823 0.000613431 12.4993 0.000613431C12.0164 0.000613431 11.5485 0.168394 11.1756 0.47526L0.189019 9.52344C0.136279 9.56703 0.0926449 9.62058 0.0606102 9.68104C0.0285755 9.7415 0.00876769 9.80768 0.00231864 9.8758C-0.0041304 9.94392 0.00290567 10.0126 0.0230248 10.078C0.043144 10.1434 0.075952 10.2042 0.119574 10.2569L1.22635 11.6024C1.26985 11.6553 1.32336 11.6991 1.38381 11.7313C1.44426 11.7635 1.51047 11.7835 1.57864 11.79C1.64681 11.7966 1.71561 11.7897 1.7811 11.7696C1.84659 11.7496 1.90748 11.7168 1.96029 11.6732L12.1695 3.26432C12.2635 3.18851 12.3807 3.14717 12.5015 3.14717C12.6223 3.14717 12.7395 3.18851 12.8336 3.26432L23.0432 11.6732C23.0959 11.7168 23.1567 11.7496 23.2221 11.7697C23.2875 11.7898 23.3562 11.7969 23.4243 11.7904C23.4924 11.784 23.5586 11.7642 23.6191 11.7321C23.6795 11.7001 23.7331 11.6565 23.7767 11.6037L24.8835 10.2582C24.927 10.2052 24.9597 10.1441 24.9796 10.0784C24.9995 10.0128 25.0062 9.94379 24.9993 9.8755C24.9925 9.80722 24.9722 9.74096 24.9396 9.68054C24.9071 9.62012 24.8629 9.56673 24.8097 9.52344Z" fill="#FF5C28"/>
</svg>
</Link>
<Link to={'/menu/'}>

<svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0625 3.24902V2.34375H14.8438C15.2754 2.34375 15.625 1.99414 15.625 1.5625V0.78125C15.625 0.349609 15.2754 0 14.8438 0H10.1562C9.72461 0 9.375 0.349609 9.375 0.78125V1.5625C9.375 1.99414 9.72461 2.34375 10.1562 2.34375H10.9375V3.24902C5.63916 4.00928 1.5625 8.55371 1.5625 14.0625H23.4375C23.4375 8.55371 19.3608 4.00928 14.0625 3.24902ZM24.2188 15.625H0.78125C0.349609 15.625 0 15.9746 0 16.4062V17.9688C0 18.4004 0.349609 18.75 0.78125 18.75H24.2188C24.6504 18.75 25 18.4004 25 17.9688V16.4062C25 15.9746 24.6504 15.625 24.2188 15.625Z" fill="black"/>
</svg>
</Link>
<Link to={'/opisanie/'}>
            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.875 17.5781V1.17188C21.875 0.522461 21.3525 0 20.7031 0H4.6875C2.09961 0 0 2.09961 0 4.6875V20.3125C0 22.9004 2.09961 25 4.6875 25H20.7031C21.3525 25 21.875 24.4775 21.875 23.8281V23.0469C21.875 22.6807 21.7041 22.3486 21.4404 22.1338C21.2354 21.3818 21.2354 19.2383 21.4404 18.4863C21.7041 18.2764 21.875 17.9443 21.875 17.5781ZM6.25 6.54297C6.25 6.38184 6.38184 6.25 6.54297 6.25H16.8945C17.0557 6.25 17.1875 6.38184 17.1875 6.54297V7.51953C17.1875 7.68066 17.0557 7.8125 16.8945 7.8125H6.54297C6.38184 7.8125 6.25 7.68066 6.25 7.51953V6.54297ZM6.25 9.66797C6.25 9.50684 6.38184 9.375 6.54297 9.375H16.8945C17.0557 9.375 17.1875 9.50684 17.1875 9.66797V10.6445C17.1875 10.8057 17.0557 10.9375 16.8945 10.9375H6.54297C6.38184 10.9375 6.25 10.8057 6.25 10.6445V9.66797ZM18.623 21.875H4.6875C3.82324 21.875 3.125 21.1768 3.125 20.3125C3.125 19.4531 3.82812 18.75 4.6875 18.75H18.623C18.5303 19.585 18.5303 21.04 18.623 21.875Z" fill="black"/>
</svg>
</Link>


            </div>
        </Header>
    )
}
export default Head;