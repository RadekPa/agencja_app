import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuthorsSelectObjectSchema as tblTitAuthorsSelectObjectSchema } from './objects/tblTitAuthorsSelect.schema';
import { tblTitAuthorsIncludeObjectSchema as tblTitAuthorsIncludeObjectSchema } from './objects/tblTitAuthorsInclude.schema';
import { tblTitAuthorsUpdateInputObjectSchema as tblTitAuthorsUpdateInputObjectSchema } from './objects/tblTitAuthorsUpdateInput.schema';
import { tblTitAuthorsUncheckedUpdateInputObjectSchema as tblTitAuthorsUncheckedUpdateInputObjectSchema } from './objects/tblTitAuthorsUncheckedUpdateInput.schema';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './objects/tblTitAuthorsWhereUniqueInput.schema';

export const tblTitAuthorsUpdateOneSchema: z.ZodType<Prisma.tblTitAuthorsUpdateArgs> = z.object({ select: tblTitAuthorsSelectObjectSchema.optional(), include: tblTitAuthorsIncludeObjectSchema.optional(), data: z.union([tblTitAuthorsUpdateInputObjectSchema, tblTitAuthorsUncheckedUpdateInputObjectSchema]), where: tblTitAuthorsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitAuthorsUpdateArgs>;

export const tblTitAuthorsUpdateOneZodSchema = z.object({ select: tblTitAuthorsSelectObjectSchema.optional(), include: tblTitAuthorsIncludeObjectSchema.optional(), data: z.union([tblTitAuthorsUpdateInputObjectSchema, tblTitAuthorsUncheckedUpdateInputObjectSchema]), where: tblTitAuthorsWhereUniqueInputObjectSchema }).strict();