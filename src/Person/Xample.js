/*function App() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


    const onValueChange =(event)=>{    
        setValue(event.target.value)
        if(event.target.value==''){
          setResult("")
        }
        else {
          if(currentConversion=='1'){
            setResult(parseFloat(event.target.value)*2.20462)
          }
          else if(currentConversion=='2'){
            setResult(parseFloat(event.target.value)*1000)
          }
          else if(currentConversion=='3'){
            setResult(parseFloat(event.target.value)*76.54)
          }
  
        }
      }
      
  
      const onResultChange =(event)=>{
        setResult(event.target.value)
        if(event.target.value==''){
          setValue("")
        }
        else {
            const convKg = (event) => {
          
            setValue(parseFloat(event.target.value))
            }

            const convGram = (event) => {
          
                setValue(parseFloat(event.target.value)/1000)
                }
                const convOunce = (event) => {
          
                    setValue(parseFloat(event.target.value)/76.54)
                    }        
                               
          }
        }
        
        const onResultChange =(event)=>{
            setResult(event.target.value)
            if(event.target.value==''){
              setValue("")
            }
            else {
              if(currentConversion=='1'){
                setValue(parseFloat(event.target.value)/2.20462)
              }
              else if(currentConversion=='2'){
                setValue(parseFloat(event.target.value)/1000)
              }
              else if(currentConversion=='3'){
                setValue(parseFloat(event.target.value)/76.54)
              }
            }
            
      
    return (
      <>
        <input type="text" placeholder="jdoe123" onChange={e => setUsername(e.target.value)} />
        <p>{username}</p>
        <input type="password" placeholder="******" onChange={e => setPassword(e.target.value)} />
        <p>{password}</p>