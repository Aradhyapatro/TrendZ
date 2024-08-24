package com.TrendZ.Ecomm.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.TrendZ.Ecomm.DTO.CreateProductRequest;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.Repository.categoryRepository;
import com.TrendZ.Ecomm.Repository.productRepository;
import com.TrendZ.Ecomm.model.Category;
import com.TrendZ.Ecomm.model.Product;

@Service
public class ProductServiceImplementation implements ProductService {
	@Autowired
	private productRepository productRepo;
	@Autowired
	private UserServiceImplementation userService;
	@Autowired
	private categoryRepository categoryRepo;

	@Override
	public Product createProduct(CreateProductRequest req) {
		Category topLevel = categoryRepo.findByName(req.getTopLevelCategory());

		if (topLevel == null) {
			Category topCategory = new Category();
			topCategory.setName(req.getTopLevelCategory());
			topCategory.setLevel(1);

			topLevel = categoryRepo.save(topCategory);
		}

		Category secondLevel = categoryRepo.findByNameAndParent(req.getSecondLevelCategory(),
				req.getTopLevelCategory());

		if (secondLevel == null) {
			Category secondCategory = new Category();
			secondCategory.setName(req.getSecondLevelCategory());
			secondCategory.setLevel(2);

			secondLevel = categoryRepo.save(secondCategory);
		}

		Category thirdLevel = categoryRepo.findByNameAndParentAndGrandparent(req.getThirdLevelCategory(),
				req.getSecondLevelCategory(), req.getTopLevelCategory());

		if (thirdLevel == null) {
			Category thirdCategory = new Category();
			thirdCategory.setName(req.getThirdLevelCategory());
			thirdCategory.setLevel(3);

			thirdLevel = categoryRepo.save(thirdCategory);
		}
		
		
		
		System.out.println("category = "+thirdLevel+"Product "+ req);
		Product product = new Product();
		product.setBrand(req.getBrand());
		product.setCategory(thirdLevel);
		product.setColor(req.getColor());
		product.setCreateAt(LocalDateTime.now());
		product.setDescription(req.getDescription());
		product.setDiscountedPrice(req.getDiscountedPrice());
		product.setDiscountPresent(req.getDiscountPercent());
		product.setImageUrl(req.getImageUrl());
		product.setPrice(req.getPrice());
		product.setQuantity(req.getQuantity());
		product.setSizes(req.getSize());
		product.setTitle(req.getTitle());

		Product savedProduct = productRepo.save(product);

		return savedProduct;
	}

	@Override
	public String deleteProduct(Long productId) throws ProductException {
		Product product = findProductById(productId);
		product.getSizes().clear();
		productRepo.delete(product);
		return "Delete Success!";
	}

	@Override
	public Product updateProduct(Long productId, Product req) throws ProductException {
		Product product = findProductById(productId);

		if (req.getQuantity() != 0) {
			product.setQuantity(req.getQuantity());
		}


		return productRepo.save(product);
	}

	@Override
	public Product findProductById(Long productId) throws ProductException {
		Optional<Product> product = productRepo.findById(productId);

		if (product.isEmpty()) {
			throw new ProductException("Product Not Found");
		}

		return product.get();
	}

	@Override
	public List<Product> findProductByCategory(String category) {
		List<Product> res = productRepo.findByCategory(category);
		return res;
	}

	@Override
	public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice,
			Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize);

		List<Product> products = productRepo.filterProducts(category, minPrice, maxPrice, minDiscount, sort);

		if (!colors.isEmpty()) {
			products = products.stream().filter(p -> colors.stream().anyMatch(c -> c.equalsIgnoreCase(p.getColor())))
					.collect(Collectors.toList());
		}
		

		if (stock != null) {
			if (stock.equals("in_stock")) {
				products=products.stream().filter(p -> p.getQuantity() > 0).collect(Collectors.toList());
			} else if (stock.equals("out_of_stock")) {
				System.out.println(stock);
				products=products.stream().filter(p -> p.getQuantity() < 1).collect(Collectors.toList());
			}
		}

		int startIndex = (int) pageable.getOffset();
		int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());

		List<Product> pageContent = products.subList(startIndex, endIndex);
		Page<Product> filteredProducts = new PageImpl<Product>(pageContent, pageable, products.size());
		return filteredProducts;

	}

	@Override
	public List<Product> findAllProducts() {
		List<Product> res = productRepo.findAll();
		return res;
	}

}
