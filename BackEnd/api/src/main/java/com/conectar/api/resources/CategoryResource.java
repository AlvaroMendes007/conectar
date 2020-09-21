package com.conectar.api.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.conectar.api.entities.Category;

@RestController
public class CategoryResource {

	Category category1 = new Category(1L, "Salada");
	Category category2 = new Category(2L, "Legumes");
	Category category3 = new Category(3L, "Fruta");
	
	@RequestMapping(value = "/categorias")
	public ResponseEntity <List<Category>> findAllCategory(){
		
		List<Category> categorias = new ArrayList<Category>();
		
		categorias.add(category1);
		categorias.add(category2);
		categorias.add(category3);
		
		return ResponseEntity.ok().body(categorias);
	}

}
