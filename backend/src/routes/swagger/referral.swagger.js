/**
 * @swagger
 * tags:
 *   name: Referral
 *   description: Referral APIs
 */

/**
 * @swagger
 * /api/referral:
 *   get:
 *     summary: Get referral page content
 *     tags: [Referral]
 *     responses:
 *       200:
 *         description: Referral page data
 */


/**
 * @swagger
 * /api/referral/message:
 *   post:
 *     summary: Send referral form
 *     tags: [Referral]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - yourName
 *               - yourEmail
 *               - practiceName
 *               - contactPersonName
 *               - practiceEmail
 *             properties:
 *               yourName:
 *                 type: string
 *               yourEmail:
 *                 type: string
 *               yourPhone:
 *                 type: string
 *               practiceName:
 *                 type: string
 *               contactPersonName:
 *                 type: string
 *               practiceEmail:
 *                 type: string
 *               practicePhone:
 *                 type: string
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Referral submitted successfully
 */