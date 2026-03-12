/**
 * @swagger
 * /api/contact:
 *   get:
 *     summary: Get contact page data
 *     tags: [Contact]
 *     responses:
 *       200:
 *         description: Contact page fetched
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
 *                     story:
 *                       type: object
 *                     contactItems:
 *                       type: array
 *                       items:
 *                         type: object
 */

/**
 * @swagger
 * /api/contact/message:
 *   post:
 *     summary: Send contact message
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - email
 *               - message
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Message sent successfully
 */