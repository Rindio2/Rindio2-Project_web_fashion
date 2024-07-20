// src/components/shop/shop.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './shop.scss';

// Define the Product interface
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  productImage: string;
  stock_quantity: number;
}

// Define the OrderItem interface
interface OrderItem {
  product_id: number;
  quantity: number;
}

const Shop: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.data); // Adjust based on your actual API response structure
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products.');
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (product: Product) => {
    try {
      const orderItem: OrderItem = {
        product_id: product.id,
        quantity: 1, // Default to 1, adjust if needed
      };
  
      const response = await fetch('http://localhost:3000/order-items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderItem),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }
  
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      setError('Failed to add product to cart.');
    }
  };

  const handleShopcard = () => {
    navigate('/shopcard');
  };

  // const handleLogout = async () => {
  // };
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="Web_fashionrikkei">
      {error && <p className="error">{error}</p>}
      {/* HEADER */}
      <div className="HeaderWeb">
        <div className="Top_header">
          <div className='Top_header1'>
            <span>Let's talk! 0904 694 869</span>
          </div>
          <div className='Top_header2'>
            <span>Free shipping on a purchase value of $200</span>
          </div>
          <div className='Top_header3'>
            <i className="fa-solid fa-magnifying-glass fa-rotate-90"></i>
            <i className="fa-solid fa-cart-shopping" onClick={handleShopcard}></i>
            <i className="fa-regular fa-heart"></i>
            <div className='user_navigation'>
            <i className="fa-regular fa-user" onClick={toggleNav}></i>
              {showNav && (
                <nav className="user-nav">
                  <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/settings">Settings</a></li>
                    <li><a href="/logout">Logout</a></li>
                  </ul>
                </nav>
              )}
            </div>
            
          </div>
          <div className="Headerline"></div>
        </div>

        <div className="Header_main">
          <div>
            <h2>AiDos</h2>
          </div>
          <div>
            <nav>
              <ul>
                <li>Home <i className="fa-solid fa-angle-down"></i></li>
                <li>About <i className="fa-solid fa-angle-down"></i></li>
                <li>Pages <i className="fa-solid fa-angle-down"></i></li>
                <li>Blog <i className="fa-solid fa-angle-down"></i></li>
                <li>Contact </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="Body_main">
        <div className="Body_content">
          <div className="Background_img1">
            <button className="Button_left"><i className="fa-solid fa-chevron-left"></i></button>
            <button className="Button_right"><i className="fa-solid fa-chevron-right"></i></button>
            <div className="Layout_inside_background">
              <label className="label_CL">Summer Collection</label>
              <p className="Custom_p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
              <button className="Button_Shop">SHOP IT NOW <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>

          <div className="Featurecd_product">
            <div className="Switch_pages">
              <div>
                <strong className="label_FP">Featurecd Products</strong>
              </div>
              <div>
                <label>View All Products <i className="fa-solid fa-arrow-right"></i></label>
              </div>
            </div>

            <div className="Featurecd_product_selection">
              {products.map((product) => (
                <div className="Product" key={product.id}>
                  <img src={product.productImage} alt={product.title} />
                  <div className="Product_details">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="Fashionrikkei">
            <div className="Brand_content">
              <label className="Brand_label">Fashionrikkei Unique Features</label>
            </div>
          </div>

          <div className="Freeshipping">
            <div className="Freeshipping_content">
              <label className="Freeshipping_label">Free Shipping</label>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
              <button className="Button_Shop">SHOP IT NOW <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="FooterWeb">
        <div className="Footer_content">
          <div className="Footer_left">
            <h2>AiDos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
            <div className="Social_icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>

          <div className="Footer_middle">
            <h3>Useful Links</h3>
            <ul>
              <li>About Us</li>
              <li>Shop</li>
              <li>Contact</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="Footer_right">
            <h3>Subscribe</h3>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <div className="Subscribe_input">
              <input type="email" placeholder="Enter your email" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="Footer_bottom">
          <p>&copy; 2023 AiDos. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
