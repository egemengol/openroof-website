import React from 'react'
import './WildLife.css'
import screenshot from '../../assets/Home/Screenshot.svg'
const WildLife = () => {
  return (
    <div className='wildlife'>
        <div className='wild-body'>
            {/* <div > */}
                <img className='wild-image' src={screenshot} alt='image'/>
            {/* </div> */}
            <div className='wild-text'>
                <p>
                   Üretilen değer<strong>10 yıl boyunca:</strong> 
                </p>
                <div>
                    <ul className='wild-ul'>
                        <li>%90 Yatırımcı,</li>
                        <li>%5 Mülk Sahibi</li>
                        <li>%5 OpenRoof </li>
                    </ul>
                </div>
                <p>olmak üzere paylaşılır. </p>
                <p className='wild-text-details'>Ardından gelen <strong>5 yıl boyunca </strong>yatırımcının payı düzenli olarak azalırken, mülk sahibinin payı aynı ölçüde artar. </p>
                <p>Toplam <strong>15 yılın sonunda,</strong> sistemin mülkiyeti ve gelirleri tamamen mülk sahibinin olur.</p>
                <p className='wild-text-details end'>Mülk sahipleri, yatırımın<strong> %10</strong> ila <strong> %50</strong>'sine katılarak hasılat paylaşımındaki oranlarını belirleyebilirler. Yatırımcılar ise yatırmak istedikleri tutara göre bir projeyle eşleştirilir.</p>
                
            </div>
        </div>
    </div>
  )
}

export default WildLife