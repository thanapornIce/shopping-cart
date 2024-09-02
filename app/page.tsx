"use client";

import {
  IconButton,
  Stack,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import ItemCart from "./item-cart";

// ฟังก์ชันสำหรับเพิ่มเครื่องหมายคอมมาในตัวเลข
const formatCurrency = (value: number) => {
  return value.toLocaleString('th-TH', { style: 'currency', currency: 'THB' });
};

export default function Home() {
  const [items, setItems] = React.useState([
    { id: 1, itemname: "iPhone 15", price: 32900, count: 0, totalPrice: 0, image: "https://www.apple.com/autopush/ww/search/modules/iphone15andiphone15plus/image__6q1rbvx4r76y_large_2x.jpg" },
    { id: 2, itemname: "iPhone 15 Pro", price: 41900, count: 0, totalPrice: 0, image: "https://www.apple.com/autopush/ww/search/modules/iphone15proandiphone15promax/image__btmvnyfmx16q_large_2x.jpg" },
    { id: 3, itemname: "iPad Pro", price: 39900, count: 0, totalPrice: 0, image: "https://www.apple.com/autopush/ww/search/modules/ipadpro/image__ckyqvvzzj6xe_large_2x.jpg" },
    { id: 4, itemname: "iPad Air", price: 23900, count: 0, totalPrice: 0, image: "https://www.apple.com/autopush/ww/search/modules/ipadair/image__u8gos1m7zoim_large_2x.jpg" },
    { id: 5, itemname: "iPad", price: 20900, count: 0, totalPrice: 0, image: "https://www.apple.com/autopush/ww/search/modules/exploreipad/image__foi1tmei9cmu_large_2x.jpg" },
    { id: 6, itemname: "iPad mini", price: 19900, count: 0, totalPrice: 0, image: "https://www.apple.com/autopush/ww/search/modules/ipadmini/image__cv68mohdz20y_large_2x.jpg" },
    { id: 7, itemname: "MacBook Air", price: 39900, count: 0, totalPrice: 0, image: "https://www.apple.com/autopush/ww/search/modules/macbookpro/image__bhennzolfcwi_large_2x.jpg" },
    { id: 8, itemname: "MacBook Pro", price: 59900, count: 0, totalPrice: 0, image: "https://www.apple.com/autopush/ww/search/modules/macbookpro/image__bhennzolfcwi_large_2x.jpg" },
    { id: 9, itemname: "iMac", price: 49900, count: 0, totalPrice: 0, image: "https://www.apple.com/autopush/ww/search/modules/iMac24inch/image__cbue0vix0fn6_large_2x.jpg" },
    { id: 10, itemname: "Mac mini", price: 20900, count: 0, totalPrice: 0, image: "https://www.apple.com/autopush/ww/search/modules/macmini/image__b0m6m3r8sv6q_large_2x.jpg" },
    { id: 11, itemname: "Mac Studio", price: 74900, count: 0, totalPrice: 0, image: "https://www.apple.com/autopush/ww/search/modules/macstudio/image__97c910n6f3m2_large_2x.jpg" },
  ]);

  const [total, setTotal] = React.useState(0);

  // คำนวณราคาทั้งหมด
  React.useEffect(() => {
    const newTotal = items.reduce((acc, item) => acc + item.totalPrice, 0);
    setTotal(newTotal);
  }, [items]);

  const handleIncremental = (id: number, change: number) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newCount = item.count + change;
          const newTotalPrice = newCount * item.price;
          return { ...item, count: newCount, totalPrice: newTotalPrice };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Card>
        <CardContent>
          {items &&
            items.map((item) => (
              <Grid container spacing={2} key={item.id} alignItems="center">
                <Grid item xs={12} md={3}>
                  <img
                    src={item.image}
                    alt={item.itemname}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }}
                  />
                </Grid>
                <Grid item xs={12} md={9}>
                  <ItemCart
                    itemname={item.itemname}
                    itemPrice={item.price}
                    itemId={item.id}
                    itemCount={item.count}
                    handleIncremental={handleIncremental}
                  />
                </Grid>
              </Grid>
            ))}
        </CardContent>
      </Card>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4">{formatCurrency(total)}</Typography>
      </Stack>
    </div>
  );
}
