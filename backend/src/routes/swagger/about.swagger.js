/**
 * @swagger
 * /api/about:
 *   get:
 *     summary: Get about page content
 *     tags: [About]
 *     responses:
 *       200:
 *         description: About content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     heroBanner:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         subtitle:
 *                           type: string
 *                         backgroundImage:
 *                           type: string
 *                     story:
 *                       type: object
 *                       properties:
 *                         heading:
 *                           type: string
 *                         description:
 *                           type: string
 *                         image:
 *                           type: string
 *                     infoCards:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           icon:
 *                             type: string
 *                           title:
 *                             type: string
 *                           description:
 *                             type: string
 */