import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactSelectObjectSchema as ContactSelectObjectSchema } from './objects/ContactSelect.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';

export const ContactFindUniqueOrThrowSchema: z.ZodType<Prisma.ContactFindUniqueOrThrowArgs> = z.object({ select: ContactSelectObjectSchema.optional(),  where: ContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactFindUniqueOrThrowArgs>;

export const ContactFindUniqueOrThrowZodSchema = z.object({ select: ContactSelectObjectSchema.optional(),  where: ContactWhereUniqueInputObjectSchema }).strict();