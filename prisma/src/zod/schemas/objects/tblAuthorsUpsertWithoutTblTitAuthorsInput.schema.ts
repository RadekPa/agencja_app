import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAuthorsUpdateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUpdateWithoutTblTitAuthorsInput.schema';
import { tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInput.schema';
import { tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsCreateWithoutTblTitAuthorsInput.schema';
import { tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUncheckedCreateWithoutTblTitAuthorsInput.schema';
import { tblAuthorsWhereInputObjectSchema as tblAuthorsWhereInputObjectSchema } from './tblAuthorsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblAuthorsUpdateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema)]),
  where: z.lazy(() => tblAuthorsWhereInputObjectSchema).optional()
}).strict();
export const tblAuthorsUpsertWithoutTblTitAuthorsInputObjectSchema: z.ZodType<Prisma.tblAuthorsUpsertWithoutTblTitAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsUpsertWithoutTblTitAuthorsInput>;
export const tblAuthorsUpsertWithoutTblTitAuthorsInputObjectZodSchema = makeSchema();
