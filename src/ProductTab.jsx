import Product from './Product';

function ProductTab() {
    let styles={
        display:"flex",
        flexwrap:"wrap",
        justifyContent:"center",
        alignItems:"center",

    }
    return(
        <div style={styles}>
        <Product  Title="logitech Mx Master 3" idx={0} />
        <Product  Title="Apple Magic Keyboard" idx={1} />
        <Product  Title="Dell UltraSharp Monitor" idx={2} />
        <Product  Title="Sony WH-1000XM4 Headphones" idx={3} />
        </div>
    );
}
export default ProductTab;