import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './tblTitAuthorsWhereUniqueInput.schema';
import { tblTitAuthorsUpdateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUpdateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUpdateWithoutTblAuthorsInput.schema';
import { tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblTitAuthorsUpdateWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInputObjectSchema)])
}).strict();
export const tblTitAuthorsUpdateWithWhereUniqueWithoutTblAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUpdateWithWhereUniqueWithoutTblAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUpdateWithWhereUniqueWithoutTblAuthorsInput>;
export const tblTitAuthorsUpdateWithWhereUniqueWithoutTblAuthorsInputObjectZodSchema = makeSchema();
