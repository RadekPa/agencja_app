import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactSelectObjectSchema as ContactSelectObjectSchema } from './objects/ContactSelect.schema';
import { ContactIncludeObjectSchema as ContactIncludeObjectSchema } from './objects/ContactInclude.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';

export const ContactFindUniqueSchema: z.ZodType<Prisma.ContactFindUniqueArgs> = z.object({ select: ContactSelectObjectSchema.optional(), include: ContactIncludeObjectSchema.optional(), where: ContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactFindUniqueArgs>;

export const ContactFindUniqueZodSchema = z.object({ select: ContactSelectObjectSchema.optional(), include: ContactIncludeObjectSchema.optional(), where: ContactWhereUniqueInputObjectSchema }).strict();