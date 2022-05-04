package com.green.computer.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int product_number;

    // private String category_code;
    private String product_name;
    private int product_price;
    private int product_stock;
    private String product_desc;
    private LocalDateTime product_date;
    private int product_hits;

    @ManyToOne(fetch = FetchType.LAZY)
    private Product_category category;


}
