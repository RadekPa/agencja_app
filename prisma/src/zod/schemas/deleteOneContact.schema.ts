import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactSelectObjectSchema as ContactSelectObjectSchema } from './objects/ContactSelect.schema';
import { ContactIncludeObjectSchema as ContactIncludeObjectSchema } from './objects/ContactInclude.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';

export const ContactDeleteOneSchema: z.ZodType<Prisma.ContactDeleteArgs> = z.object({ select: ContactSelectObjectSchema.optional(), include: ContactIncludeObjectSchema.optional(), where: ContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactDeleteArgs>;

export const ContactDeleteOneZodSchema = z.object({ select: ContactSelectObjectSchema.optional(), include: ContactIncludeObjectSchema.optional(), where: ContactWhereUniqueInputObjectSchema }).strict();