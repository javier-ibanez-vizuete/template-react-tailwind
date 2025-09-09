import axios from "axios";

const baseURL = "https:// react-students-api-eleven-code.vercel.app/api";

export const api = axios.create({
    baseURL, // URL BASE
    timeout: 10000, // TIEMPO MAXIMO PARA INTENTAR LA PETICION
    headers: {
        "Content-Type": "application/json", // TIPO DE CONTENIDO QUE MANDAMOS
        Accept: "application/json", // TIPO DE CONTENIDO QUE ACEPTAMOS DE VUELTA
    },
});

/**
 *  PARA 'GET' DENTRO DEL USEEFFECT (solo se hace una peticion y luego se llena el 'useState')
 *   const [products, setProducts] = useState([])
 * 
 *     useEffect(() => {
        api.get("/products")
            .then((response) => {
                console.log("response", response);
                console.log("Products data:", response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    PARA 'PATCH' DENTRO DE UN EVENTO ONSUBMIT DE UN FORMULARIO
        const changeName = async (id) => {
        console.log("id", id);

        try {
            const response = await api.patch(`/products/${id}`, { name: "Pantalón de pana" });
            console.log("Producto editado: ", response);

            setProducts((prev) => {
                return prev.map((product) => (product.id === id ? response.data : product));
            });
        } catch (error) {
            console.log("Error en la petición", error);
        }
    };

    PARA 'POST' DENTRO DE UN EVENTO ONSUBMIT DE UN FORMULARIO
        const createProduct = async () => {
        try {
            const created = await api.post("/products", {
                sku: "GORRA",
                name: "Gorra negra",
                description: "Calcetín 2 con dibujos de gatitos muy graciosos",
                categoryId: "cat-tops",
                price: 12,
                stock: 10,
                rating: 4.9,
                image: "https://picsum.photos/seed/postman/600/400",
            });

            if (created.data) {
                setProducts((prev) => {
                    return [...prev, created.data];
                });
            }
        } catch (error) {
            console.log("Ha ocurrido un error creando el producto", error);
        }
    };

    PARA 'DELETE' CON EL EVENTO ONCLICK Y ONKEYDOWN(PARA ACCESIBILIDAD) ENLAZADO A UN BOTON
        const deleteProduct = async (id) => {
        try {
            const deleted = await api.delete(`/products/${id}`);
            if (deleted.data?.ok) {
                const filtered = products.filter((product) => product.id !== id);
                setProducts(filtered);
            }
        } catch (error) {
            console.log("Ha ocurrido un error eliminando el producto", error);
        }
    };
 */
