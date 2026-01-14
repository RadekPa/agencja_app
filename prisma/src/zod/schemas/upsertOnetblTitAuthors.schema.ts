import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuthorsSelectObjectSchema as tblTitAuthorsSelectObjectSchema } from './objects/tblTitAuthorsSelect.schema';
import { tblTitAuthorsIncludeObjectSchema as tblTitAuthorsIncludeObjectSchema } from './objects/tblTitAuthorsInclude.schema';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './objects/tblTitAuthorsWhereUniqueInput.schema';
import { tblTitAuthorsCreateInputObjectSchema as tblTitAuthorsCreateInputObjectSchema } from './objects/tblTitAuthorsCreateInput.schema';
import { tblTitAuthorsUncheckedCreateInputObjectSchema as tblTitAuthorsUncheckedCreateInputObjectSchema } from './objects/tblTitAuthorsUncheckedCreateInput.schema';
import { tblTitAuthorsUpdateInputObjectSchema as tblTitAuthorsUpdateInputObjectSchema } from './objects/tblTitAuthorsUpdateInput.schema';
import { tblTitAuthorsUncheckedUpdateInputObjectSchema as tblTitAuthorsUncheckedUpdateInputObjectSchema } from './objects/tblTitAuthorsUncheckedUpdateInput.schema';

export const tblTitAuthorsUpsertOneSchema: z.ZodType<Prisma.tblTitAuthorsUpsertArgs> = z.object({ select: tblTitAuthorsSelectObjectSchema.optional(), include: tblTitAuthorsIncludeObjectSchema.optional(), where: tblTitAuthorsWhereUniqueInputObjectSchema, create: z.union([ tblTitAuthorsCreateInputObjectSchema, tblTitAuthorsUncheckedCreateInputObjectSchema ]), update: z.union([ tblTitAuthorsUpdateInputObjectSchema, tblTitAuthorsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblTitAuthorsUpsertArgs>;

export const tblTitAuthorsUpsertOneZodSchema = z.object({ select: tblTitAuthorsSelectObjectSchema.optional(), include: tblTitAuthorsIncludeObjectSchema.optional(), where: tblTitAuthorsWhereUniqueInputObjectSchema, create: z.union([ tblTitAuthorsCreateInputObjectSchema, tblTitAuthorsUncheckedCreateInputObjectSchema ]), update: z.union([ tblTitAuthorsUpdateInputObjectSchema, tblTitAuthorsUncheckedUpdateInputObjectSchema ]) }).strict();