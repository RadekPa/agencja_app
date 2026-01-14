import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsCreateWithoutTblTitAuthorsInput.schema';
import { tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUncheckedCreateWithoutTblTitAuthorsInput.schema';
import { tblAuthorsCreateOrConnectWithoutTblTitAuthorsInputObjectSchema as tblAuthorsCreateOrConnectWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsCreateOrConnectWithoutTblTitAuthorsInput.schema';
import { tblAuthorsWhereUniqueInputObjectSchema as tblAuthorsWhereUniqueInputObjectSchema } from './tblAuthorsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAuthorsCreateOrConnectWithoutTblTitAuthorsInputObjectSchema).optional(),
  connect: z.lazy(() => tblAuthorsWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblAuthorsCreateNestedOneWithoutTblTitAuthorsInputObjectSchema: z.ZodType<Prisma.tblAuthorsCreateNestedOneWithoutTblTitAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsCreateNestedOneWithoutTblTitAuthorsInput>;
export const tblAuthorsCreateNestedOneWithoutTblTitAuthorsInputObjectZodSchema = makeSchema();
