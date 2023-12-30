using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantAPI.Models;

namespace RestaurantAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodItemController : ControllerBase
    {
        private readonly RestaurantDbContext _context;

        public FoodItemController(RestaurantDbContext context)
        {
            _context = context;
        }

        // GET: api/FoodItem
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FoodItem>>> GetFoodItems()
        {
          if (_context.FoodItems == null)
          {
              return NotFound();
          }
            return await _context.FoodItems.ToListAsync();
        }
    }   
}
