/**
 * @swagger
 * tags:
 *   name: Service
 *   description: Service page APIs
 */


/**
 * @swagger
 * /api/service:
 *   get:
 *     summary: Get service page content
 *     tags: [Service]
 *     responses:
 *       200:
 *         description: Service page data
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
 *                     services:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           title:
 *                             type: string
 *                           description:
 *                             type: string
 *                           image:
 *                             type: string
 *                           imagePosition:
 *                             type: string
 *                             example: right
 *                           points:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 label:
 *                                   type: string
 */