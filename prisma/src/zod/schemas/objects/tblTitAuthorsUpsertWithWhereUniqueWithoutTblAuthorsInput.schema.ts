import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './tblTitAuthorsWhereUniqueInput.schema';
import { tblTitAuthorsUpdateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUpdateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUpdateWithoutTblAuthorsInput.schema';
import { tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInput.schema';
import { tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsCreateWithoutTblAuthorsInput.schema';
import { tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUncheckedCreateWithoutTblAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblTitAuthorsUpdateWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema)])
}).strict();
export const tblTitAuthorsUpsertWithWhereUniqueWithoutTblAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUpsertWithWhereUniqueWithoutTblAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUpsertWithWhereUniqueWithoutTblAuthorsInput>;
export const tblTitAuthorsUpsertWithWhereUniqueWithoutTblAuthorsInputObjectZodSchema = makeSchema();
