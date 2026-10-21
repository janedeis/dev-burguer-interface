
import { useCart } from '../../hooks/CartContent'
import { formatPrice } from '../../utils/formatPrice'
import { Table } from '../index'
import { ButtomGroup, EmptyCart, ProductImg, ProductTotalPrice, TrashImg } from './styles'
import TrashIcon from '../../assets/trash.svg'
export function CartItems() {

    const {
        cartProducts,
        increaseProduct,
        decreaseProduct,
        deleteProduct
    } = useCart()


    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Items</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>{cartProducts?.length ? (
                cartProducts.map(product => (
                    <Table.Tr key={product.id}>
                        <Table.Td>
                            <ProductImg src={product.url} />
                        </Table.Td>
                        <Table.Td>{product.name}</Table.Td>
                        <Table.Td>{product.currencyValue}</Table.Td>
                        <Table.Td>
                            <ButtomGroup>
                                <button onClick={() => decreaseProduct(product.id)} >-</button>
                                {product.quantity}
                                <button onClick={() => increaseProduct(product.id)}>+</button>
                            </ButtomGroup>
                        </Table.Td>
                        <Table.Td>
                            <ProductTotalPrice>
                                {formatPrice(product.quantity * product.price)}
                            </ProductTotalPrice>
                        </Table.Td>
                        <Table.Td>
                            < TrashImg src={TrashIcon}
                                alt="Lixeira"
                                onClick={() => deleteProduct(product.id)}
                            />
                        </Table.Td>
                    </Table.Tr>
                ))
            ) : (

                <Table.Tr>
                    <Table.Td colSpan={6} style={{ textAlign: 'center', padding: '2rem' }}>
                        <EmptyCart>Seu carrinho está vazio.</EmptyCart>
                    </Table.Td>
                </Table.Tr>

            )}
            </Table.Body>
        </Table.Root>
    )
}