import Page0 from "../pages/Page0";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

interface Route {
	to: string;
	content: any;
	render: JSX.Element;
}

export const routes: Route[] = [
	{ to: "/", content: "main", render: <Page0 /> },
	{ to: "/tarea-2", content: "Tarea #2", render: <Page1 /> },
	{ to: "/controladores", content: "Controladores", render: <Page2 /> },
	{ to: "/postman", content: "Postman", render: <Page3 /> },
];

export const codes_page1: string[] = [
	`public class EmployeeSC()
{
	
  //código previo...

  public void AddEmployee(string FirstName, string LastName)
  {
    try
    {
      Employee employee = new()
      {
        FirstName = FirstName,
        LastName = LastName
      };
      dataContext.Add(employee);
      dataContext.SaveChanges();
    }
    catch (Exception)
    {
      Console.WriteLine("No se ha podido registrar al usuario");
    }
  }

  public void DeleteEmployee(int id)
  {
    try
    {
      var filter = new EmployeeFilter();
      var result = filter.FilterBy(new EmployeeSC.EmFilterId(id));
      var output = result.ToList().FirstOrDefault();

      dataContext.Remove(output);
      dataContext.SaveChanges();
    }
    catch (Exception ex)
    {
      Console.WriteLine(ex);
    }
  }
}
`,
	`namespace DatabaseFirst_DWB.Services{
  
  public class BaseSC()
  {
    //código previo...
  }

  public interface IActions<T, U> 
			where T : class
			where U : notnull
    {
			IQueryable<T> GetAll();
			T Get(U id);
			void Add(T obj);
			void Update(U id, T obj);
			void Delete(U id);
    }

  public abstract class FilterSpecification<T> where T : class 
  {
    public IQueryable<T> Filter(IQueryable<T> list)
    {
      return ApplyFitler(list);
    }

    protected abstract IQueryable<T> ApplyFilter(IQueryable<T> list);
  }

  public abstract class FilterController<T> where T : class
  {
    public abstract IQueryable<T> FilterBy(FilterSpecification<T> filter);
  }
}`,
	`public class EmployeeDTO
{
	public string Name { get; set; }
	public string FamilyName { get; set; }
	public string Tag { get; set; }
	public string Address { get; set; }
}
`,
	`public class EmployeeSC : BaseSC, IActions<Employee, EmployeeDTO, int>
{
	public IQueryable<Employee> GetAll()
	{
		return dataContext.Employees;
	}

	public Employee Get(int id)
	{
		var employee = GetAll().FirstOrDefault(fd => fd.EmployeeId == id);

		if (employee == null)
			throw new ArgumentException($"El empleado con el id: {id} no fue encontrado");

		return employee;
	}

	public void Add(EmployeeDTO obj)
	{
		try
		{
			var newEmployee = new Employee()
			{
				FirstName = obj.Name,
				LastName = obj.FamilyName,
				Title = obj.Tag,
				Address = obj.Address
			};

			dataContext.Add(newEmployee);
			dataContext.SaveChanges();
		}
		catch (Exception ex)
		{
			Console.WriteLine(ex);
		}
	}

	public void Update(int id, EmployeeDTO obj)
	{
		try
		{
			var employee = Get(id);

			employee.FirstName = obj.Name ?? employee.FirstName;
			employee.LastName = obj.FamilyName ?? employee.LastName;
			employee.Title = obj.Tag ?? employee.Title;
			employee.Address = obj.Address ?? employee.Address;

			dataContext.Update(employee);
			dataContext.SaveChanges();
		}
		catch (ArgumentException ex)
		{
			Console.WriteLine(ex);
		}
		catch (Exception)
		{
			Console.WriteLine("Ocurrió un error al guardar los cambios");
		}
	}

	public void Delete(int id)
	{
		try
		{
			var employee = Get(id);
			dataContext.Employees.Remove(employee);
			dataContext.SaveChanges();
		}
		catch (ArgumentException ex)
		{
			Console.WriteLine(ex);
		}
		catch (Exception)
		{
			Console.WriteLine("Ocurrió un error al interntar borrar el usuario.");
		}
	}

	public class Filter : FilterController<Employee>
	{
		public override IQueryable<Employee> FilterBy(FilterSpecification<Employee> filter)
		{
			return filter.Filter(new EmployeeSC().GetAll());
		}
	}

	public class FilterByCountry : FilterSpecification<Employee>
	{
		private string country;

		public FilterByCountry(string country)
		{
			this.country = country;
		}

		protected override IQueryable<Employee> ApplyFilter(IQueryable<Employee> list)
		{
			return list.Where(w => w.Country == country);
		}
	}
}`,
	`public class ProductDTO
{
	public string Product { get; set; }
	public decimal? Price { get; set; }
	public string QuantityPerProduct { get; set; }
	public short? InStock { get; set; }
}`,
	`public class ProductSC : BaseSC, IActions<Product, ProductDTO, int>
{
	public void Add(ProductDTO obj)
	{
		try
		{
			var newProduct = new Product()
			{
				ProductName = obj.Product,
				UnitPrice = obj.Price,
				QuantityPerUnit = obj.QuantityPerProduct,
				UnitsInStock = obj.InStock
			};

			dataContext.Add(newProduct);
			dataContext.SaveChanges();
		}
		catch(Exception)
		{
			Console.WriteLine("Hubo un error tratando de agregar el producto");
		}
	}

	public void Delete(int id)
	{
		try
		{
			var product = Get(id);
			dataContext.Products.Remove(product);
			dataContext.SaveChanges();
		}
		catch (ArgumentException ex)
		{
			Console.WriteLine(ex);
		}
		catch (Exception)
		{
			Console.WriteLine("Ocurrió un error al interntar borrar el usuario.");
		}
	}

	public Product Get(int id)
	{
		var product = GetAll().FirstOrDefault(fd => fd.ProductId == id);

		if (product == null)
			throw new ArgumentException($"El empleado con el id: {id} no fue encontrado");

		return product;
	}

	public IQueryable<Product> GetAll()
	{
		return dataContext.Products;
	}

	public void Update(int id, ProductDTO obj)
	{
		try
		{
			var product = Get(id);

			product.ProductName = obj.Product ?? product.ProductName;
			product.UnitPrice = obj.Price ?? product.UnitPrice;
			product.UnitsInStock = obj.InStock ?? product.UnitsInStock;
			product.QuantityPerUnit = obj.QuantityPerProduct ?? product.QuantityPerUnit;

			dataContext.Update(product);
			dataContext.SaveChanges();
		}
		catch (ArgumentException ex)
		{
			Console.WriteLine(ex);
		}
		catch (Exception)
		{
			Console.WriteLine("Ocurrió un error al guardar los cambios");
		}
	}
}`,
	`public class CustomerDTO
{
	public string Identifier { get; set; }
	public string Company { get; set; }
	public string Contact { get; set; }
	public string Title { get; set; }
	public string PhoneNumber { get; set; }
}`,
	`public class CustomerSC : BaseSC, IActions<Customer, CustomerDTO, string>
{
	public void Add(CustomerDTO obj)
	{
		try
		{
			var newCustomer = new Customer()
			{
				CustomerId = obj.Identifier,
				CompanyName = obj.Company,
				ContactName = obj.Contact,
				ContactTitle = obj.Title,
				Phone = obj.PhoneNumber
			};

			dataContext.Add(newCustomer);
			dataContext.SaveChanges();
		}
		catch (Exception)
		{
			Console.WriteLine("Hubo un error tratando de agregar al cliente");
		}
	}

	public void Delete(string id)
	{
		try
		{
			var customer = Get(id);
			dataContext.Customers.Remove(customer);
			dataContext.SaveChanges();
		}
		catch (ArgumentException ex)
		{
			Console.WriteLine(ex);
		}
		catch (Exception)
		{
			Console.WriteLine("Ocurrió un error al interntar borrar el usuario.");
		}
	}

	public Customer Get(string id)
	{
		var customer = GetAll().FirstOrDefault(fd => fd.CustomerId == id);

		if (customer == null)
			throw new ArgumentException($"El producto con el id: {id} no fue encontrado");

		return customer;
	}

	public IQueryable<Customer> GetAll()
	{
		return dataContext.Customers;
	}

	public void Update(string id, CustomerDTO obj)
	{
		try
		{
			var customer = Get(id);
			
			customer.CustomerId = obj.Identifier ?? customer.CustomerId;
			customer.CompanyName = obj.Company ?? customer.CompanyName;
			customer.ContactName = obj.Contact ?? customer.ContactName;
			customer.ContactTitle = obj.Title ?? customer.ContactTitle;
			customer.Phone = obj.PhoneNumber ?? customer.Phone;

			dataContext.Update(customer);
			dataContext.SaveChanges();
		}
		catch (ArgumentException ex)
		{
			Console.WriteLine(ex);
		}
		catch (Exception)
		{
			Console.WriteLine("Ocurrió un error al guardar los cambios");
		}
	}
}`,
];

export const codes_page2: string[] = [
	`[Route("api/[controller]")]
[ApiController]
public class EmployeeController : ControllerBase
{
	private EmployeeSC employeeSC = new();

	// GET: api/<EmployeeController>
	[HttpGet]
	public IActionResult Get()
	{
		try
		{
			var employees = employeeSC.GetAll().Select(s => new EmployeeDTO
			{
				Name = s.FirstName,
				FamilyName = s.LastName,
				Tag = s.Title,
				Address = s.Address
			}).ToList();
			return Ok(employees);
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
		}
	}

	// GET api/<EmployeeController>/5
	[HttpGet("{id}")]
	public IActionResult Get(int id)
	{
		try
		{
			var employee = employeeSC.Get(id);
			var castEmployee = new EmployeeDTO
			{
				Name = employee.FirstName,
				FamilyName = employee.LastName,
				Tag = employee.Title,
				Address = employee.Address

			};
			return Ok(castEmployee);
		}
		catch(Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
		}
	}

	// POST api/<EmployeeController>
	[HttpPost]
	public IActionResult Post([FromBody] EmployeeDTO newEmployee)
	{
		try
		{
			employeeSC.Add(newEmployee);
			return Ok();
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
		}

	}

	// PUT api/<EmployeeController>/5
	[HttpPut("{id}")]
	public IActionResult Put(int id, [FromBody] EmployeeDTO employeeUpdated)
	{
		try
		{
			employeeSC.Update(id, employeeUpdated);
			return Ok();
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
		}
	}

	// DELETE api/<EmployeeController>/5
	[HttpDelete("{id}")]
	public IActionResult Delete(int id)
	{
		try
		{
			employeeSC.Delete(id);
			return Ok();
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
		}
	}
}`,
	`[Route("api/[controller]")]
	[ApiController]
	public class ProductController : ControllerBase
	{
		private ProductSC productSC = new();

		// GET: api/<ProductController>
		[HttpGet]
		public IActionResult Get()
		{
			try
			{
				var products = productSC.GetAll().Select(s => new ProductDTO
				{
						Product = s.ProductName,
						Price = s.UnitPrice,
						QuantityPerProduct = s.QuantityPerUnit,
						InStock = s.UnitsInStock
				}).ToList();
				return Ok(products);
			}
			catch (Exception ex)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
			}
		}

		// GET api/<ProductController>/5
		[HttpGet("{id}")]
		public IActionResult Get(int id)
		{
			try
			{
				var product = productSC.Get(id);
				var castProduct = new ProductDTO
				{
						Product = product.ProductName,
						Price = product.UnitPrice,
						QuantityPerProduct = product.QuantityPerUnit,
						InStock = product.UnitsInStock
				};
				return Ok(castProduct);
			}
			catch (Exception ex)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
			}
		}

		// POST api/<ProductController>
		[HttpPost]
		public IActionResult Post([FromBody] ProductDTO newProduct)
		{
			try
			{
				productSC.Add(newProduct);
				return Ok();
			}
			catch (Exception ex)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
			}
		}

		// PUT api/<ProductController>/5
		[HttpPut("{id}")]
		public IActionResult Put(int id, [FromBody] ProductDTO productUpdated)
		{
			try
			{
				productSC.Update(id, productUpdated);
				return Ok();
			}
			catch (Exception ex)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
			}
		}

		// DELETE api/<ProductController>/5
		[HttpDelete("{id}")]
		public IActionResult Delete(int id)
		{
			try
			{
				productSC.Delete(id);
				return Ok();
			}
			catch (Exception ex)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
			}
		}
}
`,
	`[Route("api/[controller]")]
[ApiController]
public class CustomerController : ControllerBase
{
	private CustomerSC customerSC = new();

	// GET: api/<CustomerController>
	[HttpGet]
	public IActionResult Get()
	{
		try
		{
			var customers = customerSC.GetAll().Select(s => new CustomerDTO
			{
					Identifier = s.CustomerId,
					Company = s.CompanyName,
					Contact = s.ContactName,
					Title = s.ContactTitle,
					PhoneNumber = s.Phone
			}).ToList();
			return Ok(customers);
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
		}
	}

	// GET api/<CustomerController>/5
	[HttpGet("{id}")]
	public IActionResult Get(string id)
	{
		try
		{
			var customer = customerSC.Get(id);
			var castCustomer = new CustomerDTO
			{
				Identifier = customer.CustomerId,
				Company = customer.CompanyName,
				Contact = customer.ContactName,
				Title = customer.ContactTitle,
				PhoneNumber = customer.Phone
			};
			return Ok(castCustomer);
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
		}
	}

	// POST api/<CustomerController>
	[HttpPost]
	public IActionResult Post([FromBody] CustomerDTO newCustomer)
	{
		try
		{
			customerSC.Add(newCustomer);
			return Ok();
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
		}
	}

	// PUT api/<CustomerController>/5
	[HttpPut("{id}")]
	public IActionResult Put(string id, [FromBody] CustomerDTO customerUpdated)
	{
		try
		{
			customerSC.Update(id, customerUpdated);
			return Ok();
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
		}
	}

	// DELETE api/<CustomerController>/5
	[HttpDelete("{id}")]
	public IActionResult Delete(string id)
	{
		try
		{
			customerSC.Delete(id);
			return Ok();
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
		}
	}
}
`,
];

export const scrollToTop = () => {
	window.scrollTo(0, 0);
};
