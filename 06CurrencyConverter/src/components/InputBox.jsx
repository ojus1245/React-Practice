
 
function InputBox(
{
    label,
    className="",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    currencyDisable=false,
    amountDisable=false
}) {
  
  return (
     <div className='h-1/4 w-[35%] flex   pl-5 pr-5  bg-green-200 border-b-2 my-2 rounded-xl ${className}'>
      <div className='flex flex-col justify-evenly w-full'>
<label htmlFor="amount" className=''>{label}</label>
      <input 
      type="number" 
      name="" id="amount" 
      placeholder='Amount' 
      min={0}
      
      disabled={amountDisable} 
      value={amount}
      onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
      className='w-1/4 outline-0 border-b'/>
        </div>
      <div className='flex flex-col justify-evenly items-center'>
<label htmlFor="Type" className=''>Currency Type</label>
      <select  value={selectCurrency} className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none "
      onChange={(e)=>onCurrencyChange && onCurrencyChange((e.target.value))}
      >
        
        {currencyOptions.map((l,index)=> (
          <option key={index} value={l} disabled={l===currencyDisable} >
            {l}
          </option>
        ))}
      </select>
        </div>
      
      </div>
        
   
  )
}

export default InputBox
