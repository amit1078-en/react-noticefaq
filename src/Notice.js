import React, { useEffect } from 'react';
function Notice(props) 
{	
	useEffect(() => {
		if(!document.getElementById("noticefaq-js")){
			var s = document.createElement("script");
			s.src = "https://bundle.notice.studio/index.js";
			s.async = 1;
			s.id="noticefaq-js"
			document.getElementsByTagName("head")[0].appendChild(s);
		}
		if (!document.getElementById("noticefaq-css"))
		{
			var head  = document.getElementsByTagName('head')[0];
			var link  = document.createElement('link');
			link.id   = "noticefaq-css"; 
			link.rel  = 'stylesheet'; 
			link.type = 'text/css';
			link.href = 'https://bundle.notice.studio/index.css';
			head.appendChild(link);
		}			
    }, [])
  return (
    <div className="notice-target-container" project-id={(props.hasOwnProperty("projectid"))?props["projectid"]:""} ></div>
  );
}

export default Notice;
