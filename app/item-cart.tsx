"use client";

import {
  IconButton,
  Stack,
  Typography,
  Grid
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

// ฟังก์ชันสำหรับเพิ่มเครื่องหมายคอมมาในตัวเลข
const formatCurrency = (value: number) => {
  return value.toLocaleString('th-TH', { style: 'currency', currency: 'THB' });
};

export default function ItemCart({
  itemname,
  itemPrice,
  itemId,
  itemCount,
  handleIncremental,
}: {
  itemname: string;
  itemPrice: number;
  itemId: number;
  itemCount: number;
  handleIncremental: (id: number, change: number) => void;
}) {
  const handleAddItemClick = () => {
    handleIncremental(itemId, 1);
  };

  const handleRemoveItemClick = () => {
    if (itemCount > 0) {
      handleIncremental(itemId, -1);
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={8}>
        <Typography variant="h6">{itemname}</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton onClick={handleRemoveItemClick} color="secondary">
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6">{itemCount}</Typography>
            <IconButton onClick={handleAddItemClick} color="primary">
              <AddIcon />
            </IconButton>
          </Stack>
          <Typography variant="h6">{formatCurrency(itemCount * itemPrice)}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
