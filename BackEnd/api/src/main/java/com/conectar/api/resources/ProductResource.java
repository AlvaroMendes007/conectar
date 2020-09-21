package com.conectar.api.resources;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.conectar.api.entities.Product;

@RestController
public class ProductResource {
	
	Product product = new Product(1L, "img", "Alface", "descr", 19, 1);
	Product product1 = new Product(2L, "img", "Tomate", "descr", 19, 1);
	Product product3 = new Product(3L, "img", "Cenoura", "descr", 19, 2);
	Product product4 = new Product(4L, "img", "Batata", "descr", 19, 2);
	Product product5 = new Product(5L, "img", "Pêra", "descr", 19, 3);
	
	@RequestMapping(value = "/produtos")
	public ResponseEntity <List<Product>> findAllProducts(){
		
		List<Product> produtos = new ArrayList<Product>();
		
		produtos.add(product);
		produtos.add(product1);
		produtos.add(product3);
		produtos.add(product4);
		produtos.add(product5);
				
		return ResponseEntity.ok().body(produtos);
	}
	
	@RequestMapping(value = "/produtos/{categoriaId}")
	public ResponseEntity <List<Product>> findProductByCategory(@PathVariable("categoriaId") int categorieId){
		
		List<Product> produtos = new ArrayList<Product>();
						
		produtos.add(product);
		produtos.add(product1);
		produtos.add(product3);
		produtos.add(product4);
		produtos.add(product5);
		
		produtos.removeIf(produto -> produto.getCategoriaId() != categorieId);
		
		return ResponseEntity.ok().body(produtos);
	}
}
