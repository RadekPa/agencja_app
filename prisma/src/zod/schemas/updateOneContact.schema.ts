import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactSelectObjectSchema as ContactSelectObjectSchema } from './objects/ContactSelect.schema';
import { ContactIncludeObjectSchema as ContactIncludeObjectSchema } from './objects/ContactInclude.schema';
import { ContactUpdateInputObjectSchema as ContactUpdateInputObjectSchema } from './objects/ContactUpdateInput.schema';
import { ContactUncheckedUpdateInputObjectSchema as ContactUncheckedUpdateInputObjectSchema } from './objects/ContactUncheckedUpdateInput.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';

export const ContactUpdateOneSchema: z.ZodType<Prisma.ContactUpdateArgs> = z.object({ select: ContactSelectObjectSchema.optional(), include: ContactIncludeObjectSchema.optional(), data: z.union([ContactUpdateInputObjectSchema, ContactUncheckedUpdateInputObjectSchema]), where: ContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactUpdateArgs>;

export const ContactUpdateOneZodSchema = z.object({ select: ContactSelectObjectSchema.optional(), include: ContactIncludeObjectSchema.optional(), data: z.union([ContactUpdateInputObjectSchema, ContactUncheckedUpdateInputObjectSchema]), where: ContactWhereUniqueInputObjectSchema }).strict();