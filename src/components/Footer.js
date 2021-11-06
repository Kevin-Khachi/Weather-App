const Footer = ({condition}) => {

  return (
    <div className={condition === false ? 'footer adjust-footer' : 'footer'}>

    </div>
  )

}

export default Footer;