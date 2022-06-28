import React,{useState} from 'react'


export default function TextForm(props) {
    const[text,setText] = useState("");
    const [time,setTime] = useState((x)=>(x));
    const[myStyle,setMystyle] = useState({color:"white",backgroundColor:"black"})
    const[btnText,setBtnText] = useState("enable dark mode");

    const toggle =()=>
    {
        if(myStyle.color === "black")
        {
            setMystyle({color:"white",backgroundColor:"black"})
            setBtnText("disable dark mode");
        }
        else
        {
            setMystyle({color:"black",backgroundColor:"white"})
            setBtnText('enable dark mode')
        }
    }
    
    let second1=0;
    let minute1 =0;

    const changeToUpper = ()=>
    {
       text.length!==0 && setText(text.toUpperCase());
       text.length!== 0 && props.makeAlert('changed to upper case','success');
    }
    const changeToLower = ()=>
    {
        setText(text.toLowerCase());
        text.length!== 0 &&  props.makeAlert('changed to lower case','success');

    }

    // const warn = ()=>
    // {
    //     props.makeAlert('you are about to clear this ','danger');

    // }
    const clear = ()=>
    {
        setText("");
        text.length!== 0 &&  props.makeAlert('you have  cleard all the text ','success');

    }
  
    const startTheTime = () =>
    {
        second1 = new Date().getSeconds();
        minute1 = new Date().getMinutes();
        console.log(second1,minute1);
    }
    
    const endTheTime = () =>
    {
        const second2 = new Date().getSeconds();
        const minute2 = new Date().getMinutes();
        const tex = text.split(" ").filter((element)=>(element.length!== 0)).length;
        console.log(second2,minute2);
        let second = second2-second1;
        let minute = minute2-minute1;
        if(second<0)second=60+second;
        // if(minute<0)minute=60+minute;
        const secondM = second/60;
        minute = minute+secondM;
        const wpm = tex/minute;
        console.log(minute); 
        return setTime(Math.ceil(wpm));
    }

    const handelOnChange = (event)=>
    {
        setText(event.target.value);
    }
 
  return (
    <div>
    <h1 className='text-center'>Enter the text to change
     <span>
     </span></h1>
     <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" id="flex" onClick={toggle}  />
    <label className="form-check-label" htmlFor="flex" >{btnText}</label>
    </div>

            <label htmlFor="text">text below</label>
            <textarea name="text" id="text" value={text} onChange={handelOnChange} cols="5" rows="5" className="form-control" style={myStyle}></textarea>
            <div className="my-2">
        <div className="row">
        <div className="d-flex justify-content-center">
            <button className="btn btn-success mx-2 my-1 col-5" onClick={changeToUpper}>changeToUpperCase</button>
            <button className="btn btn-success mx-2 my-1 col-5" onClick={changeToLower}>changeToLowerCase</button>
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-success mx-2 my-1 col-5" onClick={startTheTime}>startTheTime</button>
            <button className="btn btn-success mx-2 my-1 col-5" onClick={endTheTime}>EndTheTime</button>
            </div>
            <div className="d-flex justify-content-center" >
            <button className="btn btn-success my-1 col-4" onClick={clear} >clear text</button>
            </div>
        </div>
            </div>
            <div className="my-2">
                <h4 className='text-center'>number of words = "{text.split(" ").filter((element)=>(element.length!== 0)).length}"  and number of character = "{text.length}"</h4>
                <h4 className="text-center">Time to read you texts is "{text.length*.008}"</h4>
                <h2 className="text-center">Word per minutes is "{time}" </h2>
            </div>
    </div>
  )
}
