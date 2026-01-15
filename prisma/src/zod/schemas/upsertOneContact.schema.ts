import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactSelectObjectSchema as ContactSelectObjectSchema } from './objects/ContactSelect.schema';
import { ContactIncludeObjectSchema as ContactIncludeObjectSchema } from './objects/ContactInclude.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';
import { ContactCreateInputObjectSchema as ContactCreateInputObjectSchema } from './objects/ContactCreateInput.schema';
import { ContactUncheckedCreateInputObjectSchema as ContactUncheckedCreateInputObjectSchema } from './objects/ContactUncheckedCreateInput.schema';
import { ContactUpdateInputObjectSchema as ContactUpdateInputObjectSchema } from './objects/ContactUpdateInput.schema';
import { ContactUncheckedUpdateInputObjectSchema as ContactUncheckedUpdateInputObjectSchema } from './objects/ContactUncheckedUpdateInput.schema';

export const ContactUpsertOneSchema: z.ZodType<Prisma.ContactUpsertArgs> = z.object({ select: ContactSelectObjectSchema.optional(), include: ContactIncludeObjectSchema.optional(), where: ContactWhereUniqueInputObjectSchema, create: z.union([ ContactCreateInputObjectSchema, ContactUncheckedCreateInputObjectSchema ]), update: z.union([ ContactUpdateInputObjectSchema, ContactUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ContactUpsertArgs>;

export const ContactUpsertOneZodSchema = z.object({ select: ContactSelectObjectSchema.optional(), include: ContactIncludeObjectSchema.optional(), where: ContactWhereUniqueInputObjectSchema, create: z.union([ ContactCreateInputObjectSchema, ContactUncheckedCreateInputObjectSchema ]), update: z.union([ ContactUpdateInputObjectSchema, ContactUncheckedUpdateInputObjectSchema ]) }).strict();