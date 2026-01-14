import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAuthorsWhereInputObjectSchema as tblAuthorsWhereInputObjectSchema } from './tblAuthorsWhereInput.schema';
import { tblAuthorsUpdateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUpdateWithoutTblTitAuthorsInput.schema';
import { tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAuthorsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblAuthorsUpdateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema)])
}).strict();
export const tblAuthorsUpdateToOneWithWhereWithoutTblTitAuthorsInputObjectSchema: z.ZodType<Prisma.tblAuthorsUpdateToOneWithWhereWithoutTblTitAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsUpdateToOneWithWhereWithoutTblTitAuthorsInput>;
export const tblAuthorsUpdateToOneWithWhereWithoutTblTitAuthorsInputObjectZodSchema = makeSchema();
