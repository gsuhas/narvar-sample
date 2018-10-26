import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const layoutStyle = {
    height: 80
}

const bgLogo = {
    backgroundImage: 'url("/static/logo.png")',
    backgroundSize: 'contain',
    backgroundPosition: 'center'
}

const Header = () => (
    <div className="row bg-secondary" style={layoutStyle}>
        <div className="col-md-4 col-lg-3 col-sm-12 text-center">
            <h2 className="text-white display-3">NARVAR</h2>
        </div>        
    </div>
)

export default Header