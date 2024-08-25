const Newsitems = ({title ,description, src, url}) =>{

    return(
        <div className="card" style={{maxWidth: "610px", display: "flex", alignItems: "center",padding:"20px", margin: "25px auto" }}>
   <img src={src} className="card-img-top" alt="..."/>
  <div className="card-body" >
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a onClick={()=>{window.open(url,"_blank")}} className="btn btn-primary">Read more</a>
  </div>
</div>
    )
}

export default Newsitems