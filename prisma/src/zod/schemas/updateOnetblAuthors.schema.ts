import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAuthorsSelectObjectSchema as tblAuthorsSelectObjectSchema } from './objects/tblAuthorsSelect.schema';
import { tblAuthorsIncludeObjectSchema as tblAuthorsIncludeObjectSchema } from './objects/tblAuthorsInclude.schema';
import { tblAuthorsUpdateInputObjectSchema as tblAuthorsUpdateInputObjectSchema } from './objects/tblAuthorsUpdateInput.schema';
import { tblAuthorsUncheckedUpdateInputObjectSchema as tblAuthorsUncheckedUpdateInputObjectSchema } from './objects/tblAuthorsUncheckedUpdateInput.schema';
import { tblAuthorsWhereUniqueInputObjectSchema as tblAuthorsWhereUniqueInputObjectSchema } from './objects/tblAuthorsWhereUniqueInput.schema';

export const tblAuthorsUpdateOneSchema: z.ZodType<Prisma.tblAuthorsUpdateArgs> = z.object({ select: tblAuthorsSelectObjectSchema.optional(), include: tblAuthorsIncludeObjectSchema.optional(), data: z.union([tblAuthorsUpdateInputObjectSchema, tblAuthorsUncheckedUpdateInputObjectSchema]), where: tblAuthorsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAuthorsUpdateArgs>;

export const tblAuthorsUpdateOneZodSchema = z.object({ select: tblAuthorsSelectObjectSchema.optional(), include: tblAuthorsIncludeObjectSchema.optional(), data: z.union([tblAuthorsUpdateInputObjectSchema, tblAuthorsUncheckedUpdateInputObjectSchema]), where: tblAuthorsWhereUniqueInputObjectSchema }).strict();