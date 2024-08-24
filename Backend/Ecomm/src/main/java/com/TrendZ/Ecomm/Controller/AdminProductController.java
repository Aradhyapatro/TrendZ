package com.TrendZ.Ecomm.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.TrendZ.Ecomm.DTO.ApiResponse;
import com.TrendZ.Ecomm.DTO.CreateProductRequest;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.Service.ProductService;
import com.TrendZ.Ecomm.model.Product;

@Controller
@RequestMapping("/api/admin/product")
public class AdminProductController {
	@Autowired
	private ProductService productService;

	@PostMapping("/")
	public ResponseEntity<Product> createProduct(@RequestBody CreateProductRequest req) {
		Product product = productService.createProduct(req);
		return new ResponseEntity<Product>(product, HttpStatus.CREATED);
	}

	@DeleteMapping("/{productId}")
	public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long productId) throws ProductException {
		productService.deleteProduct(productId);

		ApiResponse res = new ApiResponse();
		res.setMessage("Product was Deleted");
		res.setStatus(true);

		return new ResponseEntity<ApiResponse>(res, HttpStatus.OK);
	}

	@GetMapping("/all")
	public ResponseEntity<List<Product>> getAllProducts() {
		List<Product> res = productService.findAllProducts();
		return new ResponseEntity<List<Product>>(res, HttpStatus.OK);
	}

	@PutMapping("/{productId}/update")
	public ResponseEntity<Product> UpdateProduct(@PathVariable("productId") Long productId, @RequestBody Product req)
			throws ProductException {
		Product product = productService.updateProduct(productId, req);
		return new ResponseEntity<Product>(product, HttpStatus.CREATED);
	}

	@PostMapping("/creates")
	public ResponseEntity<ApiResponse> createMultipleProduct(@RequestBody CreateProductRequest[] req) {
		for (CreateProductRequest r : req) {
			try {
				
				productService.createProduct(r);
			} catch (Exception e) {
				System.err.println("Failed to create product: " + e.getMessage());
			}
		}

		ApiResponse res = new ApiResponse();
		res.setMessage("Products are created");
		res.setStatus(true);

		return new ResponseEntity<ApiResponse>(res, HttpStatus.CREATED);
	}
}
