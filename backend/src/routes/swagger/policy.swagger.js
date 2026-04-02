/**
 * @swagger
 * tags:
 *   name: Privacy Policy
 *   description: Privacy Policy API
 */

/**
 * @swagger
 * /api/privacy-policy:
 *   get:
 *     summary: Get privacy policy content
 *     tags: [Privacy Policy]
 *     responses:
 *       200:
 *         description: Successfully fetched privacy policy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/PrivacyPolicy'
 *       404:
 *         description: Privacy policy not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Content:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *           example: paragraph
 *         text:
 *           type: string
 *           example: This is a sample paragraph
 *         items:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Item 1", "Item 2"]
 *
 *     Section:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         title:
 *           type: string
 *           example: Information We Collect
 *         content:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Content'
 *
 *     PrivacyPolicy:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 65f1a2b3c4d5e6f7g8h9i0j1
 *         image:
 *           type: string
 *           example: https://example.com/image.jpg
 *         header:
 *           type: string
 *           example: Privacy Policy
 *         description:
 *           type: string
 *           example: This privacy policy explains how we handle your data.
 *         effectiveDate:
 *           type: string
 *           format: date
 *           example: 2026-01-01
 *         sections:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Section'
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */